export type ScheduleSession = {
  time: string
  classKey: string
}

export type ScheduleDay = {
  dayKey: string
  sessions: ScheduleSession[]
}

/** Weekly program from the club banner — Mon–Fri */
export const scheduleDays: ScheduleDay[] = [
  {
    dayKey: 'monday',
    sessions: [
      { time: '10:00–11:00', classKey: 'box' },
      { time: '17:45–19:15', classKey: 'mmaPro' },
      { time: '18:00–19:00', classKey: 'bjjBeginners' },
      { time: '20:00–21:15', classKey: 'box' },
    ],
  },
  {
    dayKey: 'tuesday',
    sessions: [
      { time: '17:45–19:15', classKey: 'mmaPro' },
      { time: '19:00–20:15', classKey: 'bjjAdvanced' },
      { time: '19:15–20:30', classKey: 'kickboxing' },
      { time: '20:30–21:45', classKey: 'mmaBeginners' },
    ],
  },
  {
    dayKey: 'wednesday',
    sessions: [
      { time: '10:00–11:00', classKey: 'box' },
      { time: '17:45–19:15', classKey: 'mmaPro' },
      { time: '18:00–19:00', classKey: 'bjjBeginners' },
      { time: '20:00–21:15', classKey: 'box' },
      { time: '20:30–21:45', classKey: 'mmaBeginners' },
    ],
  },
  {
    dayKey: 'thursday',
    sessions: [
      { time: '19:00–20:15', classKey: 'bjjAdvanced' },
      { time: '19:15–20:30', classKey: 'kickboxing' },
      { time: '20:30–21:45', classKey: 'box' },
      { time: '20:30–21:45', classKey: 'mmaBeginners' },
    ],
  },
  {
    dayKey: 'friday',
    sessions: [
      { time: '10:00–11:00', classKey: 'box' },
      { time: '17:00–18:15', classKey: 'sparringMmaPro' },
      { time: '18:00–19:00', classKey: 'bjjBeginners' },
      { time: '18:00–19:00', classKey: 'sparringKickboxing' },
      { time: '19:00–20:00', classKey: 'sparringBjj' },
    ],
  },
]
