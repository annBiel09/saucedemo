type UserType = 'standard' | 'locked_out' | 'problem' | 'performance_glitch' | 'error' | 'visual';

export class UsersConfig {
    public users: Record<UserType, { username: string }> = {
        standard: {
            username: 'standard_user',
        },
        locked_out: {
            username: 'locked_out_user',
        },
        problem: {
            username: 'problem_user',
        },
        performance_glitch: {
            username: 'performance_glitch_user',
        },
        error: {
            username: 'error_user',
        },
        visual: {
            username: 'visual_user',
        }
    };

    public defaultPassword: string = 'secret_sauce';

    public getUser(userType: UserType): { username: string, password: string } {
        const user = this.users[userType];
        if (user) {
            return { username: user.username, password: this.defaultPassword };
        } else {
            throw new Error(`User type '${userType}' not found.`);
        }
    }
}