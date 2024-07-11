import { AsideDescr } from '../aside-descr/aside-descr.component';
import { Catalog } from '../catalog/catalog.component';
export function Content() {
	return (
		<div className='flex gap-6 justify-between mt-11'>
			<Catalog />
			<AsideDescr />
		</div>
	);
}
