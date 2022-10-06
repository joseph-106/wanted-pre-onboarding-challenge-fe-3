const useRouter = () => {
  const push = (path: string) => {
    history.pushState(null, "", path);
    location.reload();
  };
  return { push };
};

export default useRouter;
