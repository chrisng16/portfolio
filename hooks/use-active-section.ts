/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export type Section = {
    id: string;
    threshold?: number;
};

const useActiveSection = (sections: Section[]) => {
    const [activeSection, setActiveSection] = useState<string>("");

    const observers = sections.map(({ id, threshold = 0.2 }) => {
        const { ref, inView } = useInView({ threshold });

        useEffect(() => {
            if (inView) {
                setActiveSection(id);
            }
        }, [inView, id]);

        return { ref };
    });

    return { activeSection, observers };
};

export default useActiveSection;
