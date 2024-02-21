import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'; 
import '../calendar/calendar.css';
import Layout from '../Layout';

class Calendar extends Component {
    state = {
        showModal: false,
        newEvent: {
            title: '',
            description: '',
            start: '',
            end: ''
        },
        events: []
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
        this.setState((prevState) => ({
            events: [...prevState.events, newEvent],
            newEvent: { title: '', description: '', start: '', end: '' },
            showModal: false
        }));
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
                                <span className="close" onClick={this.closeModal}>&times;</span>
                                <input
                                    type="text"
                                    name="title"
                                    value={newEvent.title}
                                    onChange={this.handleInputChange}
                                    placeholder="일정 제목"
                                />
                                <input
                                    type="text"
                                    name="description"
                                    value={newEvent.description}
                                    onChange={this.handleInputChange}
                                    placeholder="일정 설명"
                                />
                                <input
                                    type="datetime-local"
                                    name="start"
                                    value={newEvent.start}
                                    onChange={this.handleInputChange}
                                    placeholder="시작 날짜"
                                />
                                <input
                                    type="datetime-local"
                                    name="end"
                                    value={newEvent.end}
                                    onChange={this.handleInputChange}
                                    placeholder="끝나는 날짜"
                                />
                                <button onClick={this.handleSave}>저장</button>
                            </div>
                        </div>
                    )}
                    <div className="calendar" style={{ width: '1180px'}}>
                        <FullCalendar
                            defaultView="dayGridMonth"
                            plugins={[dayGridPlugin, timeGridPlugin]} // timeGridPlugin 추가
                            events={this.state.events}
                            contentHeight={550}
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay' // 모든 보기 포함
                            }}
                        />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Calendar;
