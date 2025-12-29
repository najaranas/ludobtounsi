import { Href, useRouter } from "expo-router";

/**
 * Custom navigation hook that wraps expo-router
 * Provides a clean interface for navigation actions
 */
export default function useNavigation() {
  const router = useRouter();

  /**
   * Navigate to a route
   * `@param href - Target route`

   */
  const navigate = (href: Href) => {
    router.navigate(href);
  };

  /**
   * Push a new route onto the stack
   * `@param href - Target route`

   */
  const push = (href: Href) => {
    router.push(href);
  };

  /**
   * Replace current route and navigate (no back)
   * `@param href - Target route`

   */
  const replace = (href: Href) => {
    router.replace(href);
  };

  /**
   * reset navigation stack and navigate to a route
   * `@param href - Target route`
   */
  const resetAndNavigate = (href: Href) => {
    router.dismissAll();
    router.navigate(href);
  };

  /**
   * Go back to previous screen
   */
  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  /**
   * Check if can go back
   */
  const canGoBack = () => router.canGoBack();

  return {
    navigate,
    push,
    replace,
    resetAndNavigate,
    goBack,
    canGoBack,
  };
}
