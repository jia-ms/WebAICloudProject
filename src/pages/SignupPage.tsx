import SignupForm from "@/components/auth/SignupForm";
import AuthLayout from "@/components/auth/AuthLayout";

export default function SignupPage() {
  return (
    <AuthLayout
      eyebrow="Create account"
      title="Set up your workspace"
      subtitle="Start detecting defects in minutes. No credit card required."
    >
      <SignupForm />
    </AuthLayout>
  );
}
