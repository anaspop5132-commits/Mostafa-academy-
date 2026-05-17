export default function LoginPage() {
  return (
    <div className="gradient min-h-screen flex items-center justify-center">

      <div className="card p-10 w-[400px]">

        <h1 className="text-3xl font-bold text-center">
          تسجيل الدخول
        </h1>

        <input
          placeholder="البريد الإلكتروني"
          className="w-full mt-6 p-4 rounded-xl bg-slate-800"
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full mt-4 p-4 rounded-xl bg-slate-800"
        />

        <button className="w-full bg-yellow-500 text-black mt-6 p-4 rounded-xl font-bold">
          دخول
        </button>

      </div>

    </div>
  );
}
