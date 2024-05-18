interface FormProps {
  children: React.ReactNode;
}

function Form({ children }: FormProps) {
  return (
    <form className="bg-zinc-950 px-6 py-4 rounded-md max-w-screen-md gap-y-4 flex flex-col mx-auto">
      {children}
    </form>
  );
}

export default Form;
