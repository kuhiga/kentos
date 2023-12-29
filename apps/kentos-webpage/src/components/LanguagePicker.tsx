import { getRouteFromUrl } from '../i18n/utils';

const LanguagePicker = ({ url }: { url: URL }) => {
  const route = getRouteFromUrl(url);
  const cleanRoute = route ? route.replace(/\//g, '') : undefined;
  return (
    <span className="isolate inline-flex rounded-md">
      <a href={`/${cleanRoute ? cleanRoute : ''}`}>
        <button
          type="button"
          className="relative inline-flex items-center rounded-l-md bg-white px-3 py-1 text-sm font-normal text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        >
          English
        </button>
      </a>
      <a href={`/ja/${cleanRoute ? cleanRoute : ''}`}>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-1 text-sm font-normal text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        >
          日本語
        </button>
      </a>
    </span>
  );
};

export default LanguagePicker;
