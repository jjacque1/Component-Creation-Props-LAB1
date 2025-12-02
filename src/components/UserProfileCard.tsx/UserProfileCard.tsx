import { UserProfileCardProps } from "../types";

export function UserProfileCard({
    user,
    showEmail,
    showRole,
    onEdit, 
    children,
}: UserProfileCardProps ) {
    return (
        <div className="border p-4">
            <h2>{ user.name }</h2>

            {
                showEmail && (
                    <p>{ user.email }</p>
                )
            }

            {
                showRole && (
                    <p>{ user.role }</p>
                )
            }

            {
                onEdit && (
                    <button onClick={() => onEdit(user.name)}>
                        Edit Profile
                    </button>
                )
            }

            {children}
        </div>
    )
}