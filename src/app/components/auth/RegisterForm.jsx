'use client'

import { useState } from 'react'
import { Card, Button } from '@heroui/react'
import { Mail, Lock, User, Image, Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { toast } from 'react-toastify'

const RegisterForm = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        image: '',
        password: ''
    })

    // Uses native DOM event tracking to fix the typing freeze completely
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const { name, email, image, password } = formData

        if (!name || !email || !password) {
            toast.warning('Please fill in all required fields.', { position: 'top-right' })
            return
        }

        if (password.length < 6) {
            toast.warning('Password must be at least 6 characters long.', { position: 'top-right' })
            return
        }

        try {
            await authClient.signUp.email(
                { 
                    name, 
                    email, 
                    password, 
                    image: image || undefined 
                },
                {
                    onRequest: () => setLoading(true),
                    onSuccess: () => {
                        setLoading(false)
                        toast.success('Registration successful! Please log in.', { position: 'top-right', autoClose: 3000 })
                        router.push('/login')
                    },
                    onError: (ctx) => {
                        setLoading(false)
                        toast.error(ctx.error.message || 'Registration failed. Please try again.', { position: 'top-right' })
                    },
                }
            )
        } catch (err) {
            setLoading(false)
            toast.error('Something went wrong during execution.', { position: 'top-right' })
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
                    <User size={28} />
                </div>
                <h1 className='text-3xl font-serif font-bold text-foreground'>Create Account</h1>
                <p className='text-muted-foreground mt-2'>Sign up to join our platform</p>
            </div>

            <form onSubmit={handleRegister} className='w-full space-y-5'>
                {/* Full Name */}
                <div className="w-full flex flex-col">
                    <label className='text-foreground font-medium mb-2 text-sm'>Full Name</label>
                    <div className='flex items-center bg-secondary border border-border rounded-2xl px-4 h-12 focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                        <User size={18} className='text-primary mr-3 flex-shrink-0' />
                        <input
                            name='name'
                            type='text'
                            required
                            placeholder='John Doe'
                            value={formData.name}
                            onChange={handleInputChange}
                            className='bg-transparent text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-0 w-full h-full text-sm'
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="w-full flex flex-col">
                    <label className='text-foreground font-medium mb-2 text-sm'>Email Address</label>
                    <div className='flex items-center bg-secondary border border-border rounded-2xl px-4 h-12 focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                        <Mail size={18} className='text-primary mr-3 flex-shrink-0' />
                        <input
                            name='email'
                            type='email'
                            required
                            placeholder='hello@example.com'
                            value={formData.email}
                            onChange={handleInputChange}
                            className='bg-transparent text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-0 w-full h-full text-sm'
                        />
                    </div>
                </div>

                {/* Photo URL */}
                <div className="w-full flex flex-col">
                    <label className='text-foreground font-medium mb-2 text-sm'>Photo URL (Optional)</label>
                    <div className='flex items-center bg-secondary border border-border rounded-2xl px-4 h-12 focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                        <Image size={18} className='text-primary mr-3 flex-shrink-0' />
                        <input
                            name='image'
                            type='url'
                            placeholder='https://example.com/photo.jpg'
                            value={formData.image}
                            onChange={handleInputChange}
                            className='bg-transparent text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-0 w-full h-full text-sm'
                        />
                    </div>
                </div>

                {/* Password */}
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

                {/* Register Button */}
                <Button type='submit' isLoading={loading} className='w-full bg-blue-950 text-white font-bold rounded-2xl h-12 mt-2'>
                    Register Account
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

                {/* Link to Login */}
                <p className='text-center text-sm text-muted-foreground mt-4 w-full'>
                    Already registered?{' '}
                    <Link href='/login' className='text-primary font-bold hover:underline'>Login here</Link>
                </p>
            </form>
        </Card>
    )
}

export default RegisterForm