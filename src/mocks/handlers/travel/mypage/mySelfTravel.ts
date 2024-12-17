import { HttpResponse, http } from 'msw';
import mySelfTravelListMock from '@/mocks/data/travel/mypage/mySelfTravelListMock.json';

export const mySelfTravel = http.get(
  `${process.env.NEXT_PUBLIC_BASE_URL}/travels/created`,
  async ({ request }) => {
    const url = new URL(request.url);
    const limit = url.searchParams.get('limit');
    const offset = url.searchParams.get('offset');

    const startIndex = Number(offset) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const mySelf = mySelfTravelListMock.travels.slice(startIndex, endIndex);

    return HttpResponse.json({
      total: mySelfTravelListMock.total,
      travels: mySelf,
    });
  },
);
