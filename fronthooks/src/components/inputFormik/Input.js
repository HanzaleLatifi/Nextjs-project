function Input({ formik, name, label, type }) {
  return (
    <div className="w-full mb-3  flex flex-col ">
      <div className="text-right mb-2">
        <label className=" ">{label}</label>
      </div>
      <input
        type={type || "text"}
        name={name}
        {...formik.getFieldProps(name)}
        className="px-4 py-2 rounded-xl"
      ></input>
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-500 mt-1">{formik.errors[name]}</div>
      )}
    </div>
  );
}

export default Input;
