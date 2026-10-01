export type InsurancePlan = {
  id: string;
  company: {
    name: string;
    logo?: string;
  };
  planName: string;
  coverageLevel: string;      // مثلاً "۵,۰۰۰ یورو"
  coverageLimit: number;      // سقف پوشش (برای فیلتر)
  coverages: string[];        // مثل ["پوشش کرونا", "پوشش آتش سوزی"]
  price: number;              // قیمت به تومان
  features: string[];         // ویژگی‌های اضافی
};