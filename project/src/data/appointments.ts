import { Appointment, CalendarDay, ActivityData } from '../types';

export const appointments: Appointment[] = [
  // used array format
  {
    id: '1',
    title: 'Health checkup complete',
    doctor: 'Dr. Marcus Wilson',
    time: '09:00',
    date: '2025-10-19',
    day: 'Thursday',
    status: 'completed',
    icon: 'check-circle'
  },
  {
    id: '2',
    title: 'Ophthalmologist',
    doctor: 'Dr. Emma Johnson',
    time: '11:30',
    date: '2025-10-19',
    day: 'Thursday',
    status: 'upcoming',
    icon: 'eye'
  },
  {
    id: '3',
    title: 'Cardiologist',
    doctor: 'Dr. Robert Chen',
    time: '14:00',
    date: '2025-10-19',
    day: 'Thursday',
    status: 'upcoming',
    icon: 'heart'
  },
  {
    id: '4',
    title: 'Dentist',
    doctor: 'Dr. Sarah Parker',
    time: '09:00',
    date: '2025-10-25',
    day: 'Saturday',
    status: 'upcoming',
    icon: 'nose'
  },
  {
    id: '5',
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Michael Brown',
    time: '13:00',
    date: '2025-5-21',
    day: 'Saturday',
    status: 'upcoming',
    icon: 'activity'
  },
  {
    id: '6',
    title: 'Neurologist',
    doctor: 'Dr. Lisa Wong',
    time: '15:30',
    date: '2025-01-01',
    day: 'Saturday',
    status: 'upcoming',
    icon: 'eye'
  },
  {
    id: '7',
    title: 'Neurologist',
    doctor: 'Dr. Lisa Wong',
    time: '15:30',
    date: '2025-11-31',
    day: 'cancelled',
    status: 'upcoming',
    icon: 'ear'
  },
  {
    id: '8',
    title: 'Neurologist',
    doctor: 'Dr. Lisa Wong',
    time: '15:30',
    date: '2025-06-21',
    day: 'Saturday',
    status: 'upcoming',
    icon: 'brain'
  },
  {
    id: '9',
    title: 'Neurologist',
    doctor: 'Dr. Lisa Wong',
    time: '15:30',
    date: '2025-10-21',
    day: 'Saturday',
    status: 'cancelled',
    icon: 'teeth'
  }
];


const generateCalendarDays = (): CalendarDay[] => {
  const days: CalendarDay[] = [];

  for (let i = 27; i <= 30; i++) {
    days.push({ date: i, isCurrentMonth: false });
  }
  
  // Current month days (October 2023)
  for (let i = 1; i <= 31; i++) {
    const day: CalendarDay = { 
      date: i, 
      isCurrentMonth: true,
      isToday: i === 15
    };
    
    // Add appointments to specific days
    if (i === 7) {
      day.appointments = [{ time: '09:00' }];
    } else if (i === 14) {
      day.appointments = [{ time: '11:00' }];
    } else if (i === 19) {
      day.appointments = [
        { time: '09:00', title: 'Health checkup' },
        { time: '11:30', title: 'Eye exam' },
        { time: '14:00', title: 'Heart checkup' }
      ];
    } else if (i === 21) {
      day.appointments = [
        { time: '09:00', title: 'Dentist' },
        { time: '13:00', title: 'Physiotherapy' },
        { time: '15:30', title: 'Neurologist' }
      ];
    } else if (i === 28) {
      day.appointments = [{ time: '13:00' }];
    }
    
    days.push(day);
  }
  
  // Next month days (disabled)
  for (let i = 1; i <= 6; i++) {
    days.push({ date: i, isCurrentMonth: false });
  }
  
  return days;
};

export const calendarDays = generateCalendarDays();

export const activityData: ActivityData[] = [
  { day: 'Mon', count: 1 },
  { day: 'Tue', count: 0 },
  { day: 'Wed', count: 2 },
  { day: 'Thu', count: 8 },
  { day: 'Fri', count: 0 },
  { day: 'Sat', count: 2 },
  { day: 'Sun', count: 9 }
];

export const featuredAppointments = [
  // array Object are added here
  {
    id: '1',
    title: 'Dentist',
    doctor: 'Dr. Sangram Das',
    time: '09:00',
    date: 'October 21, 2025'
  },
  {
    id: '2',
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Ankita Kundu',
    time: '13:00',
    date: 'October 31, 2025'
  }
];