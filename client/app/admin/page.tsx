export default function AdminDashboard(){

return(

<div className="gradient min-h-screen p-10">

<h1 className="text-5xl font-bold">
لوحة تحكم الأدمن
</h1>

<div className="grid lg:grid-cols-2 gap-6 mt-10">

<div className="card p-8">
<h2 className="text-3xl">
رفع كورس
</h2>

<input
placeholder="اسم الكورس"
className="w-full mt-5 p-4 rounded-xl bg-slate-800"
/>

<button className="bg-yellow-500 text-black p-4 rounded-xl mt-5">
رفع
</button>

</div>

<div className="card p-8">
<h2 className="text-3xl">
رفع محاضرة
</h2>

<input
placeholder="اسم المحاضرة"
className="w-full mt-5 p-4 rounded-xl bg-slate-800"
/>

<button className="bg-yellow-500 text-black p-4 rounded-xl mt-5">
رفع
</button>

</div>

</div>

</div>

)

}
