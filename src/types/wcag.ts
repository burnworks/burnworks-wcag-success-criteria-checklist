export interface SuccessCriterion {
  criterion: string;
  title: string;
  level: 'A' | 'AA' | 'AAA';
  description: string;
  understanding_url: string;
  techniques_url: string;
  new_in_21?: boolean;
  new_in_22?: boolean;
}

export interface Guideline {
  guideline: string;
  title: string;
  description: string;
  success_criteria: SuccessCriterion[];
}

export interface Principle {
  principle: string;
  title: string;
  description: string;
  guidelines: Guideline[];
}

export interface WCAGData {
  wcag22: {
    version: string;
    title: string;
    principles: Principle[];
  };
}