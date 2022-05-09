
import React, { Suspense } from 'react';
import '../Pages.scss';
import { useNavigate } from "react-router-dom";
import EditTitle from '../../components/EditTitle';
import Preview from '../../components/Preview';
import Tabs from '../../components/Tabs';
import { Grid } from '../../components/List';
// import Accordion from '../../components/Accordion';
import { useStateValue } from '../../state';
import mock from '../../mock/mock';
import { Button } from '../../components/Button';

// We Use React.lazy for import the components that are called after a click on a Tab
// We don't need to import List, Align, and Accordion before the are clicking this

const List = React.lazy(() => import('../../components/List/List'));
const Align = React.lazy(() => import('../../components/List/Align'));
const Accordion = React.lazy(() => import('../../components/Accordion'));

const Create = props => {

    // * Create Page

    const navigate = useNavigate();
    const [{ title, previewer, tabs, videos }, dispatch] = useStateValue();

    const previewActor = mock.actors[previewer.actor];
    const mockTabs = mock.tabs;

    // All the information are update on changing Value

    // For the Title we update the Info only when the user click on Save

    const onSubmitTitle = e => {
        // console.log('onSubmitTitle', { e });
        dispatch({
            type: 'addTitle',
            title: e
        });
    }

    const onChangeTab = e => {
        // console.log('onChangeTab', { e });
        dispatch({
            type: 'changeTab',
            tabs: { active: e }
        });
    }

    const onSelectActor = e => {
        // console.log('onSelectActor', { e });
        dispatch({
            type: 'editPreview',
            previewer: { ...previewer, actor: e }
        });
    }

    const onSelectVoice = e => {
        // console.log('onSelectVoice', { e });
        dispatch({
            type: 'editPreview',
            previewer: { ...previewer, voice: e }
        });
    }

    const onSelectAlignment = e => {
        // console.log('onSelectAlignment', { e });
        dispatch({
            type: 'editPreview',
            previewer: { ...previewer, alignment: e }
        });
    }

    const onSelectBackground = (e, tab) => {
        // console.log('onSelectBackground', { e, tab });
        dispatch({
            type: 'editPreview',
            previewer: { ...previewer, backgroundType: tab, background: e }
        });
    }

    const onSaveVideo = () => {
        // console.log('onSaveVideo', { previewer, title });
        dispatch({
            type: 'saveVideo',
            videos: [...videos, { ...title, ...previewer }]
        });
        navigate("/saved");
    }

    return <div className="page">
        <EditTitle
            title={title}
            onSubmit={onSubmitTitle}
        >
            <div className='page__actions'>
                <Button onClick={() => { console.log('cancel') }} text='Cancel' />
                <Button onClick={onSaveVideo} text='Save' theme='primary' />
            </div>
        </EditTitle>
        <div className="page__container">
            <div className='editor'>
                <div className='editor__preview'>
                    <Preview image={previewActor.image} />
                </div>
                <div className='editor__choice'>
                    <Tabs active={tabs.active} tabs={mockTabs} changeTab={onChangeTab}>
                        {tabs.active === 0 && <Grid data={mock.actors} active={previewer.actor} onSelect={onSelectActor} />}
                        {tabs.active === 1 && <Suspense fallback={<div>Loading...</div>}><List data={mock.voice} active={previewer.voice} onSelect={onSelectVoice} /></Suspense>}
                        {tabs.active === 2 && <Suspense fallback={<div>Loading...</div>}><Align data={mock.align} active={previewer.alignment} onSelect={onSelectAlignment} /></Suspense>}
                        {tabs.active === 3 && <Suspense fallback={<div>Loading...</div>}><Accordion data={mock.background} activeType={previewer.backgroundType} active={previewer.background} onSelect={onSelectBackground} /></Suspense>}
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
}

export default Create;