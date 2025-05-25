import { HealthStatus } from '../types';

export const healthData: HealthStatus[] = [
  {
    id: 'heart',
    label: 'Healthy Heart',
    status: 'healthy',
    position: {
      top: '35%',
      left: '50%'
    },
    lastCheckup: '2025-09-15'
  },
  {
    id: 'lungs',
    label: 'Lungs',
    status: 'critical',
    position: {
      top: '30%',
      left: '45%'
    },
    lastCheckup: '2025-10-05'
  },
  {
    id: 'teeth',
    label: 'Teeth',
    status: 'healthy',
    position: {
      top: '15%',
      left: '50%'
    },
    lastCheckup: '2025-08-20'
  },
  {
    id: 'bone',
    label: 'Bone',
    status: 'warning',
    position: {
      top: '60%',
      left: '45%'
    },
    lastCheckup: '2025-07-12'
  },
  {
    id: 'bone',
    label: 'Bone',
    status: 'warning',
    position: {
      top: '60%',
      left: '45%'
    },
    lastCheckup: '2025-07-12'
  },
  {
    id: 'heart',
    label: 'Bone',
    status: 'warning',
    position: {
      top: '50%',
      left: '45%'
    },
    lastCheckup: '2025-07-12'
  }
  ,
  {
    id: 'teeth',
    label: 'Bone',
    status: 'warning',
    position: {
      top: '60%',
      left: '25%'
    },
    lastCheckup: '2025-07-12'
  },
];

export const healthStatusDetails = [
  {
    id: 'lungs',
    label: 'Lungs',
    status: 'critical',
    lastCheckup: 'October 5, 2025',
    nextCheckup: 'October 25, 2025',
    description: 'Requires immediate attention'
  },
  {
    id: 'teeth',
    label: 'Teeth',
    status: 'healthy',
    lastCheckup: 'August 20, 2025',
    nextCheckup: 'February 20, 2025',
    description: 'Regular checkup in 6 months'
  },
  {
    id: 'bone',
    label: 'Bone',
    status: 'warning',
    lastCheckup: 'July 12, 2025',
    nextCheckup: 'November 12, 2025',
    description: 'Follow-up appointment needed'
  }
];