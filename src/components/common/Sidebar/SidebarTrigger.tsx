'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { useSidebar } from '../../ui/sidebar';

export const SidebarTrigger = () => {
	const { toggleSidebar, open } = useSidebar();

	return (
		<Button onClick={toggleSidebar} size={'icon'} variant={'ghost'}>
			{open ? <ChevronLeft /> : <ChevronRight />}
		</Button>
	);
};
