"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="gradient min-h-screen flex items-center justify-center p-6">

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{opacity:0,x:-50}}
          animate={{opacity:1,x:0}}
          transition={{duration:1}}
        >
          <h1 className="text-5xl font-bold leading-[80px]">
            أكاديمية مستر مصطفى
            <br />
            لتدريس اللغة العربية
          </h1>

          <p className="text-gray-300 mt-6 text-2xl leading-[50px]">
            منصة تعليمية احترافية
            لتدريس اللغة العربية بأسلوب عصري
            وتجربة سهلة ومريحة للطلاب
          </p>

          <div className="flex gap-4 mt-10">
  <button className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold">
    تسجيل الدخول
  </button>

  <button className="border border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-colors">
    إنشاء حساب
  </button>
</div>
        </motion.div>

        <motion.div
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="card p-10"
        >
          <img
            src="/arabic-hero.png"
            className="w-full"
          />

          <p className="text-center mt-6 text-2xl">
            "العربية ليست مادة...
            بل حضارة كاملة."
          </p>
        </motion.div>

      </div>

    </main>
  );
}
