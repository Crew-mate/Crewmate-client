import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../calendar/calendar.css';
import { format } from 'date-fns';
import axios from 'axios';

class Calendar extends Component {
    state = {
        events: [],
        selectedEvent: null, 
        mouseX: null,
        mouseY: null,
    };

    componentDidMount() {
        this.fetchEvents(); 
    }

    fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/schdule'); 
            const events = response.data;
            this.setState({ events });
        } catch (error) {
            console.log(error);
        }
    };

    handleEventClick = (clickInfo) => {
        const event = clickInfo.event;
        const mouseX = clickInfo.jsEvent.clientX; 
        const mouseY = clickInfo.jsEvent.clientY - 90; 
        this.setState({ selectedEvent: event, mouseX, mouseY });
    };
    
    showEventDetails = () => {
        const { selectedEvent, mouseX, mouseY } = this.state;
        if (selectedEvent && mouseX !== null && mouseY !== null) {
            console.log("Start Date:", selectedEvent.start);
            console.log("End Date:", selectedEvent.end);
            
            const startDate = selectedEvent.start && format(selectedEvent.start, 'HH:mm', { timeZone: 'Asia/Seoul' });
            const endDate = selectedEvent.end && format(selectedEvent.end, 'HH:mm', { timeZone: 'Asia/Seoul' });
            
            return (
                <div className="event-details" style={{ position: 'absolute', left: mouseX, top: mouseY }}>
                    <h2>{selectedEvent.title}</h2>
                    <div className='time_place'>
                    <p>장소: {selectedEvent.extendedProps && selectedEvent.extendedProps.place}</p> 
                    <p>시간: {startDate} ~ {endDate}</p>
                    </div>
                    <button onClick={() => this.setState({ selectedEvent: null, mouseX: null, mouseY: null })}>닫기</button>
                </div>
            );
        }
        return null;
    };
    
    render() {
        return (
                <div className="cal_page">
                    {this.showEventDetails()} {/* 클릭한 위치에 이벤트 정보 표시 */}
                    <div className="calendar" style={{ width: '1180px' }}>
                        <FullCalendar
                            initialView="dayGridMonth" // 수정된 부분
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // interactionPlugin 추가
                            events={this.state.events}
                            contentHeight={570}
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay'
                            }}
                            eventClick={this.handleEventClick} // eventClick 이벤트 핸들러 추가
                        />
                    </div>
                </div>
        );
    }
}

export default Calendar;
