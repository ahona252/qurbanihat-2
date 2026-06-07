'use client'

import { useState } from 'react'
import { Card, Button } from '@heroui/react'
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { toast } from 'react-toastify'

const LoginForm = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // Uses native DOM event tracking to fix the typing freeze completely
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = formData

        if (!email || !password) {
            toast.warning('Please enter both your email and password.', { position: 'top-right' })
            return
        }

        try {
            await authClient.signIn.email(
                { email, password },
                {
                    onRequest: () => setLoading(true),
                    onSuccess: () => {
                        setLoading(false)
                        toast.success('Welcome back! Successfully logged in. 🌸', { position: 'top-right', autoClose: 2000 })
                        router.push('/')
                    },
                    onError: (ctx) => {
                        setLoading(false)
                        toast.error(ctx.error.message || 'Invalid email or password.', { position: 'top-right' })
                    }
                }
            )
        } catch (err) {
            setLoading(false)
            toast.error('An unexpected connection error occurred.', { position: 'top-right' })
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await authClient.signIn.social({
                provider: 'google',
                callbackURL: '/'
            })
        } catch (err) {
            toast.error('Google Authentication failed.', { position: 'top-right' })
        }
    }

    return (
        <Card className='w-full max-w-md p-8 shadow-2xl rounded-[2.5rem] border border-border bg-card text-card-foreground mx-auto'>
            <div className='text-center mb-8'>
                <div className='w-16 h-16 mx-auto bg-secondary text-primary flex items-center justify-center rounded-2xl mb-4'>
                    <LogIn size={28} />
                </div>
                <h1 className='text-3xl font-serif font-bold text-foreground'>Welcome Back</h1>
                <p className='text-muted-foreground mt-2'>Sign in to manage your account</p>
            </div>

            <form onSubmit={handleLogin} className='w-full space-y-5'>
                {/* Email Field */}
                <div className="w-full flex flex-col">
                    <label className='text-foreground font-medium mb-2 text-sm'>Email Address</label>
                    <div className='flex items-center bg-secondary border border-border rounded-2xl px-4 h-12 focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                        <Mail size={18} className='text-primary mr-3 flex-shrink-0' />
                        <input
                            name='email'
                            type='email'
                            required
                            placeholder='name@example.com'
                            value={formData.email}
                            onChange={handleInputChange}
                            className='bg-transparent text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-0 w-full h-full text-sm'
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="w-full flex flex-col">
                    <label className='text-foreground font-medium mb-2 text-sm'>Password</label>
                    <div className='flex items-center bg-secondary border border-border rounded-2xl px-4 h-12 focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                        <Lock size={18} className='text-primary mr-3 flex-shrink-0' />
                        <input
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            required
                            placeholder='••••••••'
                            value={formData.password}
                            onChange={handleInputChange}
                            className='bg-transparent text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-0 w-full h-full text-sm'
                        />
                        <button type='button' onClick={() => setShowPassword(!showPassword)} className='text-muted-foreground hover:text-primary ml-2 focus:outline-none'>
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Login Button */}
                <Button type='submit' isLoading={loading} className='w-full bg-blue-950 text-white font-bold rounded-2xl h-12 mt-2'>
                    Sign In
                </Button>

                {/* Divider */}
                <div className='flex items-center gap-3 my-4 w-full'>
                    <div className='h-px bg-border flex-1' />
                    <span className='text-xs text-muted-foreground'>OR</span>
                    <div className='h-px bg-border flex-1' />
                </div>

                {/* Google Sign In */}
                <Button type='button' onClick={handleGoogleLogin} variant='secondary' className='w-full bg-secondary text-foreground border border-border rounded-2xl h-12'>
                    <FcGoogle size={20} className="mr-2" />
                    <span>Continue with Google</span>
                </Button>

                {/* Link to Register */}
                <p className='text-center text-sm text-muted-foreground mt-4 w-full'>
                    Don't have an account?{' '}
                    <Link href='/register' className='text-primary font-bold hover:underline'>Register here</Link>
                </p>
            </form>
        </Card>
    )
}

export default LoginForm