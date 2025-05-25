export interface NavigationItem {
  id: string;
  icon: string;
  label: string;
  isActive?: boolean;
}

export interface HealthStatus {
  id: string;
  label: string;
  status: 'healthy' | 'warning' | 'critical';
  position: {
    top: string;
    left: string;
  };
  lastCheckup?: string;
}

export interface Appointment {
  id: string;
  title: string;
  doctor?: string;
  time: string;
  date: string;
  day: string;
  status?: 'upcoming' | 'completed' | 'cancelled';
  icon?: string;
}

export interface CalendarDay {
  date: number;
  appointments?: {
    time: string;
    title?: string;
  }[];
  isToday?: boolean;
  isCurrentMonth: boolean;
}

export interface ActivityData {
  day: string;
  count: number;
}

export interface UserProfile {
  name: string;
  avatar: string;
  role?: string;
}