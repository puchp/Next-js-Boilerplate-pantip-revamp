'use server';

export async function getAnnouncementContent() {
  // eslint-disable-next-line no-console
  console.log('### getAnnouncementContent');

  const result = await fetch(
    'https://pantip.com/api/forum-service/forum/get_announce?room=homepage&limit=3',
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language':
          'en-US,en;q=0.9,th-TH;q=0.8,th;q=0.7,ja;q=0.6,ru;q=0.5',
        'if-none-match': 'W/"2f1-egvqDWF6ocNEWL0tXYz95WO1xfw"',
        ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        'sec-ch-ua':
          '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://pantip.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    },
  );

  return result.json();
}

export async function getRoomRecommendContent() {
  // eslint-disable-next-line no-console
  console.log('### getRoomRecommendContent');

  const result = await fetch(
    'https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code={s2ixy126c46SVPv1MxJ13}&',
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language':
          'en-US,en;q=0.9,th-TH;q=0.8,th;q=0.7,ja;q=0.6,ru;q=0.5',
        'if-none-match': 'W/"ecf-JoHtQPLgAFJSorbtFauDaYYEWrQ"',
        ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        'sec-ch-ua':
          '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://pantip.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    },
  );
  return result.json();
}

export async function getHighlightContent() {
  // eslint-disable-next-line no-console
  console.log('### getHighlightContent');

  const result = await fetch(
    'https://pantip.com/api/forum-service/home/get_highlight',
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language':
          'en-US,en;q=0.9,th-TH;q=0.8,th;q=0.7,ja;q=0.6,ru;q=0.5',
        'if-none-match': 'W/"e5f-sIhAsiv1ZEUkGREpwn/XBwrcL/Y"',
        ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        'sec-ch-ua':
          '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://pantip.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    },
  );

  return result.json();
}

export async function getSidebarContent() {
  // eslint-disable-next-line no-console
  console.log('### getSidebarContent');

  const result = await fetch(
    'https://pantip.com/api/forum-service/home/get_sidebar_content',
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language':
          'en-US,en;q=0.9,th-TH;q=0.8,th;q=0.7,ja;q=0.6,ru;q=0.5',
        'if-none-match': 'W/"654-RM0VKZ+kTClpnHX1b9GGZkis04M"',
        ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        'sec-ch-ua':
          '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://pantip.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    },
  );
  return result.json();
}

export async function getSuggestTopicPopularContent() {
  // eslint-disable-next-line no-console
  console.log('### getSuggestTopicPopularContent');

  const result = await fetch(
    'https://pantip.com/api/forum-service/home/get_suggest_topic_popular',
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language':
          'en-US,en;q=0.9,th-TH;q=0.8,th;q=0.7,ja;q=0.6,ru;q=0.5',
        'content-type': 'application/x-www-form-urlencoded',
        ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        'sec-ch-ua':
          '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://pantip.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: 'type=room&limit=1&ranking_time=1714806000&next_id=2&ignore_list%5B0%5D=siliconvalley&ignore_list%5B1%5D=social&ignore_list%5B2%5D=cartoon&ignore_list%5B3%5D=bangrak&ignore_list%5B4%5D=chalermthai&ignore_list%5B5%5D=ratchada&ignore_list%5B6%5D=silom',
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    },
  );

  return result.json();
}

export async function getRoomClubsContent() {
  // eslint-disable-next-line no-console
  console.log('### getRoomClubsContent');

  const result = await fetch(
    'https://pantip.com/api/forum-service/forum/room_clubs?room=all&limit=40',
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language':
          'en-US,en;q=0.9,th-TH;q=0.8,th;q=0.7,ja;q=0.6,ru;q=0.5',
        'if-none-match': 'W/"a6a-OzI3AOlRSORmD8h3+UYjOiOzNAQ"',
        ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        'sec-ch-ua':
          '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://pantip.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    },
  );

  return result.json();
}
