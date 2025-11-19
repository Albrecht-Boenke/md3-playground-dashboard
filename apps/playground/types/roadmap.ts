export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'critical' | 'high' | 'medium' | 'low';
  estimatedHours: number;
  category: 'feature' | 'bug' | 'refactoring' | 'chore';
  notes: string;
  discussionPoints: string[];
}

export interface Day {
  day: string;
  title: string;
  tasks: Task[];
}

export interface Week {
  week: number;
  title: string;
  description: string;
  days: Day[];
}

