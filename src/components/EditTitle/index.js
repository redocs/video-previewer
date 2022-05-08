import PropTypes from 'prop-types';
import { useState } from 'react';
import { Arrow } from '../Icons';
import { Button, Tag } from '../Button';
import './edittitle.scss';

const EditTitle = props => {

    const { title: stateTitle, onSubmit, children } = props;

    const [isEdit, setIsEdit] = useState(false);
    const [formValue, setFormValue] = useState(stateTitle);

    const tagOption = ['Email', 'Marketing', 'Greeting'];

    const submitTitle = (e) => {
        e.preventDefault();
        onSubmit(formValue);
        setIsEdit(false);
    }

    const handleForm = (type, e) => {
        // console.log('handleForm', { type, e });
        if (type === 'tags') {
            let updateArray = [];
            if (formValue.tags.find(item => item === e.target.value)) {
                updateArray = formValue.tags.filter(item => item !== e.target.value);
            } else {
                updateArray = [...formValue.tags, e.target.value];
            }
            setFormValue({
                ...formValue,
                [type]: updateArray
            });
        } else {
            setFormValue({
                ...formValue,
                [type]: e.target.value
            });
        }

    }

    return <div className="title">
        {!isEdit && <div className='title__view'>
            <div className='title__arrow'>
                <h1>
                    {formValue.title}
                </h1>
                <Arrow direction='down' onClick={() => { setIsEdit(true) }} />
            </div>
            <div className='title_buttons'>{children}</div>
        </div>}
        {isEdit && <div className='title__edit'>
            <form onSubmit={submitTitle} className='form__title'>
                <input type="text" name="title" value={formValue.title} onChange={(e) => { handleForm('title', e) }} />
                <textarea type="text" name="text" value={formValue.text} onChange={(e) => { handleForm('text', e) }} />
                <div className='tagselector'>
                    {tagOption.map((tag, i) => {
                        const checked = !!formValue.tags.find(item => item === tag);
                        // console.log({ checked });
                        return <Tag key={i} checked={checked} value={tag} onClick={(e) => { handleForm('tags', e) }} />
                    })}
                </div>
                <div className='submit'>
                    <Button type='input' theme='primary' text='Save' />
                </div>
            </form>
        </div>}
    </div>
}

EditTitle.propTypes = {
    title: PropTypes.object,
    onSubmit: PropTypes.func,
    children: PropTypes.any
}

EditTitle.defaultProps = {
    onSubmit: () => { }
}

export default EditTitle;