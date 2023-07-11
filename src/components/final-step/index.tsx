type UserData = {
  gender: string
}

type Props = UserData & {
  updateFormData: (field: UserData) => void
}

export const FinalStep = ({ gender, updateFormData }: Props) => {
  return (
    <>
      <label htmlFor="gender">Select Gender :</label>
      <select
        name="gender"
        id="gender"
        autoFocus
        required
        value={gender}
        onChange={e => updateFormData({ gender: e.target.value })}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </>
  )
}
