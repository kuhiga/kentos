import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import {
  getLangFromUrl,
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
    { name: t('nav.home'), href: translatePath('/') },
    { name: t('nav.team'), href: translatePath('/team') },
    { name: t('nav.testimonials'), href: translatePath('/testimonials') },
    { name: t('nav.pricing'), href: translatePath('/pricing') },
    { name: t('nav.contact'), href: translatePath('/contact') },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex-col">
      <div className="px-6 mx-auto flex h-11 my-5 max-w-7xl justify-between pt-6 gap-4 align-middle flex-col sm:flex-row">
        <a href={translatePath('/')} className="-m-6 p-1.5 mb-2">
          <img
            className="h-16 w-auto"
            src="/TalkStoryLogoWithSlogan.png"
            alt="Logo"
          />
          <span className="sr-only">Talk Story English</span>
        </a>
        <LanguagePicker url={url} />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pt-6 lg:max-w-2xl med:pl-8 med:pr-0">
          <nav
            className="flex items-center justify-between lg:justify-start"
            aria-label="Global"
          >
            <div className="hidden sm:flex  gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-normal leading-6 text-gray-900 text-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="ml-auto">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 md:hidden lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
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
              <span className="sr-only">Talk Story English</span>
              <img className="h-8 w-auto" src="/TalkStoryLogo.png" alt="" />
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
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
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
