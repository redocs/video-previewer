const mock = {
    actors: [
        {
            name: 'Anna',
            image: './image3.png'
        },
        {
            name: 'YoYo',
            image: './image1.png'
        },
        {
            name: 'Skye',
            image: './image5.png'
        },
        {
            name: 'Mike',
            image: './image6.png'
        },
        {
            name: 'Vincent',
            image: './image7.png'
        },
        {
            name: 'Peter',
            image: './image8.png'
        },
        {
            name: 'May',
            image: './image9.png'
        }
    ],
    voice: [
        {
            name: 'Asian',
            image: './voice0.png'
        },
        {
            name: 'British',
            image: './voice1.png'
        },
        {
            name: 'American',
            image: './voice1.png'
        },
    ],
    align: [
        {name: 'Left'},
        {name: 'Center'},
        {name: 'Right'}
    ],
    tabs: [
        'Actor',
        'Voice',
        'Alignment',
        'Background'
    ],
    background: [
        { 
            type: 'Images',
            items: [
                {
                    name: 'Office',
                    image: './background4.png'
                },
                {
                    name: 'Space',
                    image: './background5.png'
                },
                {
                    name: 'Noise',
                    image: './background6.png'
                },
                {
                    name: 'Meeting Room',
                    image: './background7.png'
                },
                {
                    name: 'Books',
                    image: './background8.png'
                },
                {
                    name: 'Desk',
                    image: './background9.png'
                }
            ]
        },
        {
            type: 'Solid Colours',
            items: [
                {
                    name: 'Office',
                    image: './background4.png'
                },
                {
                    name: 'Space',
                    image: './background5.png'
                },
                {
                    name: 'Noise',
                    image: './background6.png'
                },
                {
                    name: 'Meeting Room',
                    image: './background7.png'
                },
                {
                    name: 'Books',
                    image: './background8.png'
                },
                {
                    name: 'Desk',
                    image: './background9.png'
                }
            ]
        },
        {
            type: 'Videos',
            items: [
                {
                    name: 'Office',
                    image: './background4.png'
                },
                {
                    name: 'Space',
                    image: './background5.png'
                },
                {
                    name: 'Noise',
                    image: './background6.png'
                },
                {
                    name: 'Meeting Room',
                    image: './background7.png'
                },
                {
                    name: 'Books',
                    image: './background8.png'
                },
                {
                    name: 'Desk',
                    image: './background9.png'
                }
            ]
        }
    ],
    userTabs: [
        'Profile',
        'My Plan',
        'Billing'
    ],
    user: {
        image: './profile.png'
    },
    plans: [
        {
            name: 'Free',
            options: [
                {
                    text: 'Pellentesque interdum libero et',
                    inPlan: true
                },
                {
                    text: 'Pellentesque posuere jdfkdfkdfhd',
                    inPlan: true
                },
                {
                    text: 'Cras sed felis eget',
                    inPlan: true
                },
                {
                    text: 'Cras sed felis eget',
                    inPlan: true
                },
                {
                    text: 'Nullam vitae augue',
                    inPlan: true
                }
            ],
            price: '0'
        },
        {
            name: 'Pro',
            options: [
                {
                    text: 'Maecenas eget luctus purus',
                    inPlan: true
                },
                {
                    text: 'Graesent in sollicitudin velit',
                    inPlan: true
                },
                {
                    text: 'Donec in orci vitae nisi ',
                    inPlan: true
                },
                {
                    text: 'Class aptent taciti',
                    inPlan: true
                },
                {
                    text: 'Ut blandit vestibulum',
                    inPlan: false
                }
            ],
            price: '12'
        },
        {
            name: 'Team',
            options: [
                {
                    text: 'Etiam ac finibus nisi, a porttitor',
                    inPlan: true
                },
                {
                    text: 'Quisque tincidunt velit a sapien vulputate ',
                    inPlan: true
                },
                {
                    text: 'Vivamus pulvinar',
                    inPlan: true
                },
                {
                    text: 'In hac habitasse platea',
                    inPlan: true
                },
                {
                    text: 'Nullam vitae augue',
                    inPlan: false
                }
            ],
            price: '23'
        },
        {
            name: 'Agency',
            options: [
                {
                    text: 'Praesent in sollicitudin velit',
                    inPlan: true
                },
                {
                    text: 'Nulla tincidunt finibus interdum',
                    inPlan: true
                },
                {
                    text: 'Nullam vitae augue',
                    inPlan: true
                },
                {
                    text: 'Curabitur eleifend',
                    inPlan: true
                },
                {
                    text: 'Quisque vel ex enim',
                    inPlan: true
                }
            ],
            price: '43'
        }
    ],
    table: {
        header: ['Reference ID', 'Date', 'Amount', 'Invoice'],
        data: [
            {
                reference: '4571222f6rthswfg9981fr55',
                date: '7/12/2020',
                amount: '28',
            },
            {
                reference: '4571222f6rthswfg9981fr55',
                date: '7/12/2020',
                amount: '36',
            },
            {
                reference: '4571222f6rthswfg9981fr55',
                date: '7/12/2020',
                amount: '14',
            },
        ]
    }
}

export default mock;