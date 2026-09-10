import React from "react";
import { Wrench } from "lucide-react";

export default function Loading() {
  return (
    <div
      className="min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-16 bg-slate-950 text-white"
      dir="rtl"
    >
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-xl shadow-blue-500/30 animate-pulse">
          <Wrench className="w-8 h-8 animate-spin" />
        </div>
      </div>
      <p className="text-sm font-bold text-slate-300">
        جارٍ تحميل بيانات سباك برو...
      </p>
    </div>
  );
}
