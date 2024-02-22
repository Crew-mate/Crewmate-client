import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import '../calendar/calendar.css';
import { format } from 'date-fns'
import Layout from '../Layout';

class Calendar extends Component {
    state = {
        showModal: false,
        newEvent: {
            content_title: '',
            description: '',
            location: '', 
            start: '',
            end: ''
        },
        events: [],
        selectedEvent: null, 
        clickedPosition: null 
    };

    openModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            newEvent: {
                ...prevState.newEvent,
                [name]: value
            }
        }));
    };

    handleSave = () => {
        const { newEvent } = this.state;
        // 새 이벤트 생성
        const event = {
            title: `${newEvent.content_title}- ${newEvent.description}`, // 설명 나오게 하고 싶음 추가
            start: newEvent.start,
            end: newEvent.end,
            location: newEvent.location 
        };
        this.setState((prevState) => ({
            events: [...prevState.events, event],
            newEvent: { content_title: '', description: '', location: '', start: '', end: '' }, 
            showModal: false
        }));
    };

    handleEventClick = (clickInfo) => {
        const event = clickInfo.event;
        const mouseX = clickInfo.jsEvent.clientX; // 클릭한 마우스의 x 좌표
        const mouseY = clickInfo.jsEvent.clientY - 90; // 클릭한 마우스의 y 좌표에서 100을 뺌
        this.setState({ selectedEvent: event, mouseX, mouseY });
    };
    
    showEventDetails = () => {
        const { selectedEvent, mouseX, mouseY } = this.state;
        if (selectedEvent && mouseX !== undefined && mouseY !== undefined) {
            console.log("Start Date:", selectedEvent.start);
            console.log("End Date:", selectedEvent.end);
            
            const startDate = selectedEvent.start && format(selectedEvent.start, 'HH:mm', { timeZone: 'Asia/Seoul' });
            const endDate = selectedEvent.end && format(selectedEvent.end, 'HH:mm', { timeZone: 'Asia/Seoul' });
            
            return (
                <div className="event-details" style={{ position: 'absolute', left: mouseX, top: mouseY }}>
                    <h2>{selectedEvent.title}</h2>
                    <div className='time_place'>
                    <p>장소: {selectedEvent.extendedProps && selectedEvent.extendedProps.location}</p> 
                    <p>시간: {startDate} ~ {endDate}</p>
                    </div>
                    <button onClick={() => this.setState({ selectedEvent: null, mouseX: undefined, mouseY: undefined })}>닫기</button>
                </div>
            );
        }
        return null;
    };
    
    
    render() {
        const { showModal, newEvent } = this.state;
        return (
            <Layout>
                <div className="cal_page">
                    <button className='add_btn' onClick={this.openModal}>일정 추가하기</button>
                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <input
                                    type="text"
                                    name="content_title"
                                    value={newEvent.content_title}
                                    onChange={this.handleInputChange}
                                    placeholder="일정 제목"
                                    className="title-input"
                                />
                                <div className="date-input-container">
                                    <input
                                        type="datetime-local"
                                        name="start"
                                        value={newEvent.start}
                                        onChange={this.handleInputChange}
                                        placeholder="시작 날짜"
                                        className="date-input"
                                    />
                                    <span className="date-input-separator">~</span>
                                    <input
                                        type="datetime-local"
                                        name="end"
                                        value={newEvent.end}
                                        onChange={this.handleInputChange}
                                        placeholder="끝나는 날짜"
                                        className="date-input"
                                    />
                                </div>
                                <input
                                    type="text" 
                                    name="location" 
                                    value={newEvent.location} 
                                    onChange={this.handleInputChange}
                                    placeholder="장소 입력" 
                                    className="location-input" 
                                />
                                <input
                                    className='description'
                                    type="text"
                                    name="description"
                                    value={newEvent.description}
                                    onChange={this.handleInputChange}
                                    placeholder="일정 설명"
                                />
                                <button className='save' onClick={this.handleSave}>저장</button>
                                <button className='close' onClick={this.closeModal}>닫기</button>
                            </div>
                        </div>
                    )}
                    {this.showEventDetails()} {/* 클릭한 위치에 이벤트 정보 표시 */}
                    <div className="calendar" style={{ width: '1180px' }}>
                        <FullCalendar
                            defaultView="dayGridMonth"
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
            </Layout>
        );
    }
}

export default Calendar;
