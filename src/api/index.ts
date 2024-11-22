export const getWakaTimeData = async () => {
  const token: string = Buffer.from(`${process.env.WAKATIME_API_KEY}`).toString(
    'base64',
  );

  const wakaTimeResponse = await fetch(
    `${process.env.WAKATIME_API}/users/current/all_time_since_today`,
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    },
  );

  return wakaTimeResponse.json();
};

export const getWakaTimeWeek = async () => {
  const token: string = Buffer.from(`${process.env.WAKATIME_API_KEY}`).toString(
    'base64',
  );

  const leadersRes = await fetch(`${process.env.WAKATIME_API}/leaders`, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });

  const leadersRegRes = await fetch(
    `${process.env.WAKATIME_API}/leaders?country_code=ID`,
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    },
  );

  const statsRes = await fetch(
    `${process.env.WAKATIME_API}/users/current/stats?including_today=true`,
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    },
  );

  const leadersData = await leadersRes.json();
  const leadersRegData = await leadersRegRes.json();
  const stats = await statsRes.json();

  const data = {
    worldRank: leadersData.current_user.rank,
    countryRank: leadersRegData.current_user.rank,
    totalSeconds: stats.data.total_seconds_including_other_language,
    dailyAverage: stats.data.daily_average_including_other_language,
    languages: stats.data.languages.map((lang: Record<string, string>) => ({
      name: lang.name,
      total: lang.text,
    })),
  };

  return data;
};
