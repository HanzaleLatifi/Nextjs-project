import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "@/components/inputFormik/Input";
import Layout from "@/containers/Layout/index";
import toast from 'react-hot-toast';
import { useRouter } from "next/router";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("ایمیل خود را وارد کنید")
    .email("ایمیل نامعتبر است"),
  password: Yup.string().required("پسورد خود ار وارد کنید"),
});

function index() {
  const router=useRouter();

  const onSubmit = (values) => {
  console.log(values)
    axios.post('http://localhost:5000/api/user/signin',values,{withCredentials:true})
    .then(res=>{
      toast.success('با موفقیت وارد شدید');
      router.push("/")
    })
    .catch(err=>{toast.error(err?.response?.data?.message)})  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Layout>
      <div className="text-center w-full ">
        <form onSubmit={formik.handleSubmit} className="w-full md:w-1/3 mx-auto p-4 ">
          <h1 className="text-green-500 font-bold text-3xl mb-8">ورود</h1>

          <Input formik={formik} label="ایمیل" name="email" />
          <Input
            formik={formik}
            label="رمز عبور"
            name="password"
            type="password"
          />

          <button type="submit" className={`mt-6 px-8 py-3 rounded-xl  ${formik.isValid ? 'bg-green-500 text-white cursor-pointer' : 'bg-gray-500 cursor-not-allowed'}`} disabled={!formik.isValid}>
            ورود
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default index;
