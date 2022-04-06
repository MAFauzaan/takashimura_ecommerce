import React, { useState, useEffect } from 'react';
import { useDynamicScreen } from "../../hooks/useDynamicScreen";

export const useHeader = () => {
    const { windowWidth } = useDynamicScreen();
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    console.log(openDrawer)
    const onOpenDrawer = () => {
        setOpenDrawer(true)
    }

    const onCloseDrawer = () => {
        setOpenDrawer(false)
    }

    useEffect(() => {
        const setDrawerByScreenWidth = () => {
            if (openDrawer && windowWidth > 600) {
                setOpenDrawer(false)
            }
        };

        const lock = () => {
            if (openDrawer) {
                document.body.style.overflow = 'hidden';
            }
            else {
                document.body.style.overflow = '';
            }
        }
        lock()
        setDrawerByScreenWidth();
    }, [openDrawer, windowWidth]);

    return {
        openDrawer,
        onOpenDrawer,
        onCloseDrawer
    }
}