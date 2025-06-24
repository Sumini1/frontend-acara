import AuthLayout from "@/components/layouts/AuthLayout"
import authServices from "@/services/auth.service";
import Activation from "@/components/views/Auth/Activation";

interface PropTypes {
    status: 'success' | 'error'
}
const ActivationPage = (props: PropTypes) => {
    return (
        <AuthLayout title="Acara | Activation">
            <Activation {...props} />
        </AuthLayout>
    );
}

export async function getServerSideProps(context: { query: { code: string } }) {
  try {
    const result = await authServices.activation({ code: context.query.code });
    console.log(result.data.data)
    if (result.data.data) {
      return {
        props: {
          status: "success",
        },
      };
    }

    // ❗ Tambahkan ini untuk handle jika data falsy
    return {
      props: {
        status: "error",
      },
    };
  } catch (error) {
    return {
      props: {
        status: "error",
      },
    };
  }
}

export default ActivationPage