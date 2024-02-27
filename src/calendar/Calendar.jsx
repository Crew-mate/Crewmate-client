import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import '../calendar/calendar.css';
import { format } from 'date-fns'
import Layout from '../Layout';
import axios from 'axios';

class Calendar extends Component {
    state = {
        showModal: false,
        newEvent: {
            title: '',
            start: '',
            end: '',
            place: '', 
            description: '',
        },
        events: [],
        selectedEvent: null, 
        mouseX: null,
        mouseY: null,
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

    handleSave = async () => {
        const { newEvent } = this.state;
        // 새 이벤트 생성
        const event = {
            title: newEvent.title, // 설명 나오게 하고 싶음 추가
            start: newEvent.start,
            end: newEvent.end,
            place: newEvent.place ,
            description: newEvent.description
        };
    
        try {
            const response = await axios.post('http://localhost:5000/schdule', event);
            if (response.status === 201) {
                alert('일정이 등록되었습니다');
                this.setState(prevState => ({
                    events: [...prevState.events, event],
                    newEvent: { title: '', start: '', end: '', place: '', description: '' },
                    showModal: false
                }));
                
            }
        } catch (error) {
            alert('일정 등록에 실패하였습니다');
            console.log(error);
        }
    };

    handleEventClick = (clickInfo) => {
        const event = clickInfo.event;
        const mouseX = clickInfo.jsEvent.clientX; // 클릭한 마우스의 x 좌표
        const mouseY = clickInfo.jsEvent.clientY - 90; // 클릭한 마우스의 y 좌표에서 100을 뺌
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
                                    name="title"
                                    value={newEvent.title}
                                    onChange={this.handleInputChange} v
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
                                    name="place" 
                                    value={newEvent.place} 
                                    onChange={this.handleInputChange}
                                    placeholder="장소 입력" 
                                    className="place-input" 
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
            </Layout>
        );
    }
}

export default Calendar;
