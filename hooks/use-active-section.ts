'use client'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export type Section = {
    id: string;
    threshold?: number;
};

const useActiveSection = (sections: Section[]) => {
    const [activeSection, setActiveSection] = useState<string>("");

    const observers = sections.map(({ id, threshold = 0.5 }) => {
        const { ref, inView } = useInView({ threshold });

        useEffect(() => {
            if (inView) {
                setActiveSection(id);
            }
        }, [inView, id]);

        return { id, ref };
    });

    return { activeSection, observers };
};

export default useActiveSection;
