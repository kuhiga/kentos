import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import {
  getLangFromUrl,
  getTranslatedAssetPath,
  useTranslatedPath,
  useTranslations,
} from '../i18n/utils';
import LanguagePicker from './LanguagePicker.tsx';

const Navbar = ({ url }: { url: URL }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const lang = getLangFromUrl(url);
  const translatePath = useTranslatedPath(lang);
  const t = useTranslations(lang);
  const navigation = [
    { name: t('nav.about'), href: translatePath('/') },
    { name: t('nav.team'), href: translatePath('/team') },
    { name: t('nav.testimonials'), href: translatePath('/testimonials') },
    { name: t('nav.pricing'), href: translatePath('/pricing') },
    { name: t('nav.contact'), href: translatePath('/contact') },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex-col">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <LanguagePicker url={url} />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
          <nav
            className="flex items-center justify-between lg:justify-start"
            aria-label="Global"
          >
            <a href={translatePath('/')} className="-m-1.5 p-1.5">
              <span className="sr-only">EigoDojo</span>
              <img
                className="h-8 w-auto mr-4"
                src={getTranslatedAssetPath(lang, 'icon.png')}
                alt="Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="hidden lg:ml-10 lg:flex lg:gap-x-14">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-medium font-normal leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href={translatePath('/')} className="-m-1.5 p-1.5">
              <span className="sr-only">EigoDojo</span>
              <img
                className="h-8 w-auto"
                src={getTranslatedAssetPath(lang, 'icon.png')}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
