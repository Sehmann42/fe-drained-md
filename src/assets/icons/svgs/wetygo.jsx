const WetYGOIcon = () => {
    return (
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Card */}
            <rect
                x="12"
                y="8"
                width="40"
                height="56"
                rx="6"
                fill="#1e1e1e"
                stroke="#555"
                strokeWidth="2"
            />

            {/* Wet shine overlay */}
            <path
                d="M14 18 C25 10, 40 12, 50 20 L50 28 C38 22, 26 22, 14 30 Z"
                fill="rgba(0,150,255,0.25)"
            />

            {/* Water drops */}
            <path
                d="M22 40 C20 44, 22 47, 24 47 C26 47, 28 44, 26 40 C25 38, 23 38, 22 40 Z"
                fill="#4fc3f7"
            />
            <path
                d="M38 36 C36 40, 38 43, 40 43 C42 43, 44 40, 42 36 C41 34, 39 34, 38 36 Z"
                fill="#4fc3f7"
            />

            {/* Crack / damage line */}
            <path
                d="M28 10 L30 20 L27 28 L31 36 L29 46"
                stroke="#888"
                strokeWidth="1.5"
            />
        </svg>
    )
}