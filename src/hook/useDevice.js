import { mobileScreen, tabletScreen } from "../contants/index,";
import useMediaQuery from "./useQueryMedia";

function useDevice() {
    const isTablet = useMediaQuery(`(max-width:${tabletScreen}px)`);
    const isMobile = useMediaQuery(`(max-width:${mobileScreen}px)`);
    const isDesktop =!isTablet && !isMobile;

    return { isTablet, isMobile, isDesktop };
}

export default useDevice;