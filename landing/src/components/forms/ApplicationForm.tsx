'use client';

import React, { useState } from 'react';
import { ApplicationData } from '@/types/application';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EtherealShadow } from '@/components/ui/ethereal-shadow';
import { FadeIn, SlideUp, StaggerContainer, fadeInVariants, slideUpVariants, staggerVariants } from '@/components/ui/motion';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ApplicationFormProps {
  onSubmit: (data: ApplicationData) => Promise<void>;
  isSubmitting?: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  telegramUsername?: string;
  projectDescription?: string;
  aboutYou?: string;
  hoursPerWeek?: string;
}

const experienceOptions = [
  { value: 'frontend', label: 'Front-end' },
  { value: 'backend', label: 'Back-end' },
  { value: 'fullstack', label: 'Full-stack' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'ml-ai', label: 'ML/AI' },
];

const hoursOptions = [
  { value: '5-10', label: '5-10 hours' },
  { value: '10-15', label: '10-15 hours' },
  { value: '15-20', label: '15-20 hours' },
  { value: '20+', label: '20+ hours' },
];

const coursesOptions = [
  { value: 'cs-degree', label: 'Computer Science Degree' },
  { value: 'bootcamp', label: 'Coding Bootcamp' },
  { value: 'online-courses', label: 'Online Courses' },
  { value: 'self-taught', label: 'Self-taught' },
];

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  onSubmit,
  isSubmitting = false,
}) => {
  const [formData, setFormData] = useState<ApplicationData>({
    firstName: '',
    lastName: '',
    email: '',
    telegramUsername: '',
    phone: '',
    hasTeam: false,
    projectDescription: '',
    projectLink: '',
    experience: [],
    aboutYou: '',
    canCommit: false,
    hoursPerWeek: '',
    coursesTaken: [],
    otherCourses: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [otherCoursesEnabled, setOtherCoursesEnabled] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.telegramUsername.trim()) {
      newErrors.telegramUsername = 'Telegram username is required';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    }

    if (!formData.aboutYou.trim()) {
      newErrors.aboutYou = 'This field is required';
    }

    if (!formData.hoursPerWeek) {
      newErrors.hoursPerWeek = 'Please select hours per week available';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setSubmitStatus('idle');
        await onSubmit(formData);
        setSubmitStatus('success');
      } catch {
        setSubmitStatus('error');
      }
    }
  };

  const handleExperienceChange = (value: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({ ...prev, experience: [...prev.experience, value] }));
    } else {
      setFormData(prev => ({ ...prev, experience: prev.experience.filter(exp => exp !== value) }));
    }
  };

  const handleCoursesChange = (value: string, checked: boolean) => {
    let newCourses: string[];
    if (checked) {
      newCourses = [...formData.coursesTaken, value];
    } else {
      newCourses = formData.coursesTaken.filter(course => course !== value);
    }

    setFormData(prev => ({ ...prev, coursesTaken: newCourses }));
    setOtherCoursesEnabled(newCourses.includes('other'));

    if (!newCourses.includes('other')) {
      setFormData(prev => ({ ...prev, otherCourses: '' }));
    }
  };

  if (submitStatus === 'success') {
    return (
      <EtherealShadow variant="subtle">
        <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto" />
              <div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                  Application Submitted!
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-4">
                  Thanks! We&apos;ll review and get back to you soon.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Check your email and Telegram for updates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </EtherealShadow>
    );
  }

  return (
    <StaggerContainer
      variants={staggerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {submitStatus === 'error' && (
        <EtherealShadow variant="subtle">
          <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <div>
                  <h4 className="text-red-800 dark:text-red-200 font-medium">Submission Error</h4>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    There was an error submitting your application. Please try again.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </EtherealShadow>
      )}

      {/* Personal Information */}
      <SlideUp variants={slideUpVariants}>
        <EtherealShadow variant="subtle">
          <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Tell us about yourself</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className={errors.firstName ? "border-red-500" : ""}
                required
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className={errors.lastName ? "border-red-500" : ""}
                required
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={errors.email ? "border-red-500" : ""}
              required
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="telegram">
              Telegram Username <span className="text-red-500">*</span>
            </Label>
            <Input
              id="telegram"
              type="text"
              placeholder="@username"
              value={formData.telegramUsername}
              onChange={(e) => setFormData(prev => ({ ...prev, telegramUsername: e.target.value }))}
              className={errors.telegramUsername ? "border-red-500" : ""}
              required
            />
            {errors.telegramUsername && (
              <p className="text-sm text-red-500">{errors.telegramUsername}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
        </CardContent>
        </Card>
        </EtherealShadow>
      </SlideUp>

      {/* Team Information */}
      <SlideUp variants={slideUpVariants}>
        <EtherealShadow variant="subtle">
          <Card>
        <CardHeader>
          <CardTitle>Team Information</CardTitle>
          <CardDescription>Do you have a team already?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label>Do you already have a team? <span className="text-red-500">*</span></Label>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasTeam-yes"
                  checked={formData.hasTeam === true}
                  onCheckedChange={() => setFormData(prev => ({ ...prev, hasTeam: true }))}
                />
                <Label htmlFor="hasTeam-yes" className="cursor-pointer">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasTeam-no"
                  checked={formData.hasTeam === false}
                  onCheckedChange={() => setFormData(prev => ({ ...prev, hasTeam: false }))}
                />
                <Label htmlFor="hasTeam-no" className="cursor-pointer">No</Label>
              </div>
            </div>
          </div>
        </CardContent>
        </Card>
        </EtherealShadow>
      </SlideUp>

      {/* Project Information */}
      <SlideUp variants={slideUpVariants}>
        <EtherealShadow variant="subtle">
          <Card>
        <CardHeader>
          <CardTitle>Project Information</CardTitle>
          <CardDescription>Tell us about your experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="projectDescription">
              Tell me about a project you built <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="projectDescription"
              placeholder="Project description, tech stack, challenges..."
              value={formData.projectDescription}
              onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
              className={errors.projectDescription ? "border-red-500" : ""}
              rows={4}
              required
            />
            {errors.projectDescription && (
              <p className="text-sm text-red-500">{errors.projectDescription}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectLink">Project Link (optional)</Label>
            <Input
              id="projectLink"
              type="url"
              placeholder="GitHub, demo, or portfolio link"
              value={formData.projectLink || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, projectLink: e.target.value }))}
            />
          </div>
        </CardContent>
        </Card>
        </EtherealShadow>
      </SlideUp>

      {/* Experience */}
      <SlideUp variants={slideUpVariants}>
        <EtherealShadow variant="subtle">
          <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
          <CardDescription>What&apos;s your background?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Your previous experience</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {experienceOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`exp-${option.value}`}
                    checked={formData.experience.includes(option.value)}
                    onCheckedChange={(checked) => handleExperienceChange(option.value, !!checked)}
                  />
                  <Label htmlFor={`exp-${option.value}`} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="aboutYou">
              What should I know about you? <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="aboutYou"
              placeholder="Background, interests, goals..."
              value={formData.aboutYou}
              onChange={(e) => setFormData(prev => ({ ...prev, aboutYou: e.target.value }))}
              className={errors.aboutYou ? "border-red-500" : ""}
              rows={4}
              required
            />
            {errors.aboutYou && (
              <p className="text-sm text-red-500">{errors.aboutYou}</p>
            )}
          </div>
        </CardContent>
        </Card>
        </EtherealShadow>
      </SlideUp>

      {/* Commitment */}
      <SlideUp variants={slideUpVariants}>
        <EtherealShadow variant="subtle">
          <Card>
        <CardHeader>
          <CardTitle>Commitment</CardTitle>
          <CardDescription>Can you commit to the program?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Are you able to commit to 3 months? <span className="text-red-500">*</span></Label>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="canCommit-yes"
                  checked={formData.canCommit === true}
                  onCheckedChange={() => setFormData(prev => ({ ...prev, canCommit: true }))}
                />
                <Label htmlFor="canCommit-yes" className="cursor-pointer">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="canCommit-no"
                  checked={formData.canCommit === false}
                  onCheckedChange={() => setFormData(prev => ({ ...prev, canCommit: false }))}
                />
                <Label htmlFor="canCommit-no" className="cursor-pointer">No</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hoursPerWeek">
              Hours per week available <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.hoursPerWeek}
              onValueChange={(value) => setFormData(prev => ({ ...prev, hoursPerWeek: value }))}
            >
              <SelectTrigger className={errors.hoursPerWeek ? "border-red-500" : ""}>
                <SelectValue placeholder="Select hours per week" />
              </SelectTrigger>
              <SelectContent>
                {hoursOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.hoursPerWeek && (
              <p className="text-sm text-red-500">{errors.hoursPerWeek}</p>
            )}
          </div>
        </CardContent>
        </Card>
        </EtherealShadow>
      </SlideUp>

      {/* Education */}
      <SlideUp variants={slideUpVariants}>
        <EtherealShadow variant="subtle">
          <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
          <CardDescription>What&apos;s your learning background?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Courses taken</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[...coursesOptions, { value: 'other', label: 'Other' }].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`course-${option.value}`}
                    checked={formData.coursesTaken.includes(option.value)}
                    onCheckedChange={(checked) => handleCoursesChange(option.value, !!checked)}
                  />
                  <Label htmlFor={`course-${option.value}`} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {otherCoursesEnabled && (
            <div className="space-y-2">
              <Label htmlFor="otherCourses">Other courses</Label>
              <Input
                id="otherCourses"
                type="text"
                placeholder="Other courses or certifications..."
                value={formData.otherCourses || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, otherCourses: e.target.value }))}
              />
            </div>
          )}
        </CardContent>
        </Card>
        </EtherealShadow>
      </SlideUp>

      {/* Submit Button */}
      <SlideUp variants={slideUpVariants}>
        <EtherealShadow variant="subtle">
          <Card>
        <CardContent className="pt-6">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </Button>
        </CardContent>
        </Card>
        </EtherealShadow>
      </SlideUp>
      </form>
    </StaggerContainer>
  );
};