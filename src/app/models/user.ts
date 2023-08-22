enum Goal {
  WEIGHT_LOSS,
  WEIGHT_GAIN,
  WEIGHT_MAINTENANCE
}

enum ActivityLevel {
  SEDENTARY,
  LIGHTLY_ACTIVE,
  MODERATELY_ACTIVE,
  VERY_ACTIVE,
  SUPER_ACTIVE
}

enum Gender {
  MALE,
  FEMALE
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  gender: Gender;
  dateOfBirth: Date;
  activityLevel: ActivityLevel;
  height: number;
  weight: number;
  goal: Goal;
}


