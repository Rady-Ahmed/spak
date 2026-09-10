import { companyConfig } from "@/data/company";

export interface ServiceRequestFormData {
  name: string;
  phone: string;
  address: string;
  service: string;
  problemDescription: string;
  preferredDateTime?: string;
  notes?: string;
  hasPhoto?: boolean;
  mapsLocationUrl?: string;
}

/**
 * بناء رسالة واتساب منسقة ومحترفة لطلب الخدمة
 */
export function buildWhatsAppMessage(data: ServiceRequestFormData): string {
  const lines: string[] = [
    "مرحبًا، أود طلب خدمة سباكة من سباك برو:",
    "---------------------------------",
    `👤 الاسم: ${data.name.trim()}`,
    `📞 الهاتف: ${data.phone.trim()}`,
    `🔧 نوع الخدمة: ${data.service.trim()}`,
    `📍 العنوان والمنطقة: ${data.address.trim()}`,
  ];

  if (data.mapsLocationUrl) {
    lines.push(`🗺️ موقعي على Google Maps: ${data.mapsLocationUrl}`);
  }

  lines.push(`⚠️ تفاصيل المشكلة: ${data.problemDescription.trim()}`);

  if (data.preferredDateTime && data.preferredDateTime.trim()) {
    lines.push(`📅 الموعد المفضل: ${data.preferredDateTime.trim()}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(`📝 ملاحظات إضافية: ${data.notes.trim()}`);
  }

  if (data.hasPhoto) {
    lines.push(`📷 (ملاحظة: سأقوم بإرفاق صورة للمشكلة في هذه المحادثة الآن)`);
  }

  lines.push("---------------------------------");
  lines.push("تم الإرسال من خلال الموقع الإلكتروني.");

  return lines.join("\n");
}

/**
 * توليد رابط الواتساب الرسمي المباشر مع نص مشفر
 */
export function createWhatsAppUrl(message?: string, customNumber?: string): string {
  const number = customNumber || companyConfig.whatsapp;
  const baseUrl = `https://wa.me/${number}`;
  if (!message) {
    return baseUrl;
  }
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * توليد رابط اتصال هاتفي tel:
 */
export function createPhoneUrl(customNumber?: string): string {
  const number = customNumber || companyConfig.phone;
  return `tel:${number}`;
}
