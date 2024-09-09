export function TeamMemberCard({ name, role, image }) {
    return (
        <div className="team-member-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}