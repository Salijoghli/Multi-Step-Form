type UserData = {
  age: number
  aboutMe: string
}

type Props = UserData & {
  updateFormData: (field: Partial<UserData>) => void
}

export const SecondStep = ({ age, aboutMe, updateFormData }: Props) => {
  return (
    <>
      <label htmlFor="age">Age :</label>
      <input
        type="number"
        name="age"
        autoFocus
        id="age"
        min={1}
        required
        value={String(age)}
        onChange={e => updateFormData({ age: Number(e.target.value) })}
      />
      <label htmlFor="about-me">About me :</label>
      <textarea
        name="about-me"
        id="about-me"
        required
        cols={5}
        rows={5}
        placeholder="Write about yourself..."
        value={aboutMe}
        onChange={e => updateFormData({ aboutMe: e.target.value })}
      ></textarea>
    </>
  )
}
