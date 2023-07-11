type UserData = {
  firstName: string
  lastName: string
}

type Props = UserData & {
  updateFormData: (field: Partial<UserData>) => void
}

export const FirstStep = ({ firstName, lastName, updateFormData }: Props) => {
  return (
    <>
      <label htmlFor="first-name">First Name :</label>
      <input
        type="text"
        name="first-name"
        autoFocus
        id="first-name"
        required
        value={firstName}
        onChange={e => updateFormData({ firstName: e.target.value })}
      />
      <label htmlFor="last-name">Last Name :</label>
      <input
        type="text"
        name="last-name"
        id="last-name"
        required
        value={lastName}
        onChange={e => updateFormData({ lastName: e.target.value })}
      />
    </>
  )
}
