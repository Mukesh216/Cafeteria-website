import React from 'react';



function Event() {
    const upcomingEvents = [
        {
            name: 'Coffee Tasting',
            date: 'Monday, April 23rd',
            time: '11:00am - 1:00pm',
            description: 'Sample different types of coffee and learn about their flavors and origins.'
        },
        {
            name: 'Brunch',
            date: 'Tuesday, May 6th',
            time: '6:00pm - 8:00pm',
            description: '  a special brunch event on the weekends with a menu featuring breakfast items and coffee drinks.'
        },
        
        {
            name: 'Art Exhibit',
            date: 'Wednesday, May 6th',
            time: '6:00pm - 8:00pm',
            description: 'View local artist Jane Doe\'s beautiful artwork while enjoying some coffee.'
        },
        {
            name: 'Game Night',
            date: 'Thursday, May 6th',
            time: '6:00pm - 8:00pm',
            description: 'Host a game night where customers can come and play board games or card games while enjoying some coffee and snacks.'
        },
        {
            name: 'Trivia Night',
            date: 'Friday, May 6th',
            time: '6:00pm - 8:00pm',
            description: 'a trivia night where customers can form teams and compete for prizes while enjoying some coffee and snacks.'
        },
        {
            name: 'Open Mic Night',
            date: 'Saturday, April 15th',
            time: '7:00pm - 9:00pm',
            description: 'Come share your talents and enjoy some coffee!'
        },
        {
            name: 'Book Club',
            date: 'Sunday, May 6th',
            time: '6:00pm - 8:00pm',
            description: ' book club where customers can come and discuss a chosen book while enjoying some coffee and snacks.'
        },
        
        
    ];

    return (
        <div className='mt-5 container text-center event_container ' style={{marginBottom:300}}>
            <div className='eventBg' style={{height:1700}}></div>
            <h2 className='mb-5 border-bottom border-4 border-info pb-2' style={{marginTop:140,color:"#FFEA20",fontFamily:"poppins",fontWeight:600}}><span className='text-black fs-1' >U</span>pcoming <span className='text-black fs-1'>E</span>vents</h2>
            <ul style={{ listStyle: "none" , }} className="event_lists text-white">
                {upcomingEvents.map((event) => (
                    <li key={event.name} className="mb-5">
                        <h3 className="mb-3" style={{fontFamily:"pacifico", textDecoration:"underline"}}>{event.name}</h3>
                        <p className='text-black'><strong>Date: </strong> {event.date}</p>
                        <p className='text-black'><strong>Time:</strong> {event.time}</p>
                        <p style={{fontFamily:'poppins',color:"#ffffff"}} className='fs-5'>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
        // <>
        // <SeaAnemone></SeaAnemone>
        // <div><h1>Hi</h1></div></>
    );
}

export default Event;
