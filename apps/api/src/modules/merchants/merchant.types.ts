export interface ApproveMerchantDto {
  merchantId: string;
  approvedBy: string;
}

export interface RejectMerchantDto {
  merchantId: string;
  rejectedBy: string;
  reason: string;
}

export interface MerchantResponse {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  country: string;
  governmentIdType: string;
  governmentId: string;
  status: string;
  createdAt: Date;
}