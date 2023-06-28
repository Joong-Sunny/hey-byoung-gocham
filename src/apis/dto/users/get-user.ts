import { Job } from '@/apis/dto/job';
import { Residence } from '@/apis/dto/residence';
import { WorryCategory } from '@/apis/dto/worry-category';

export interface GetUserResponse {
  email: string;
  phoneNumber: string | null;
  profileImageUrl: string | null;
  id: number;
  status: string;
  updatedAt: string;
  nickname: string;
  birthDate: string;
  sex: string;
  marketingAcceptedAt: string | null;
  joinStatus: string;
  vendor: string;
  userWorryCategories: WorryCategory[];
  residence: Residence;
  job: Job;
}
