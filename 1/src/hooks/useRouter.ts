const useRouter = () => {
  const push = (path: string) => {
    history.pushState(null, "", path);
    const popStateEvent = new PopStateEvent("popstate", { state: path });
    dispatchEvent(popStateEvent);
  };
  return { push };
};

export default useRouter;
