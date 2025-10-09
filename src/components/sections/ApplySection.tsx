'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EtherealShadow } from '@/components/ui/ethereal-shadow';
import { ArrowRight, Users, Clock, Target } from 'lucide-react';
import Link from 'next/link';

export const ApplySection: React.FC = () => {
  return (
    <section id="apply" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background to-muted/50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Apply for Cohort 2
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Ready to build something amazing? Join our next cohort of aspiring developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <EtherealShadow variant="subtle">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl">Small Cohorts</CardTitle>
                <CardDescription>
                  Limited spots for personalized attention
                </CardDescription>
              </CardHeader>
            </Card>
          </EtherealShadow>

          <EtherealShadow variant="subtle">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl">3 Months</CardTitle>
                <CardDescription>
                  Intensive program with weekly check-ins
                </CardDescription>
              </CardHeader>
            </Card>
          </EtherealShadow>

          <EtherealShadow variant="subtle">
            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl">Real Projects</CardTitle>
                <CardDescription>
                  Build something meaningful for your portfolio
                </CardDescription>
              </CardHeader>
            </Card>
          </EtherealShadow>
        </div>

        <div className="text-center">
          <EtherealShadow>
            <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start?</CardTitle>
              <CardDescription className="text-lg">
                The application takes about 5 minutes to complete. We&apos;ll review it and get back to you within a week.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/apply">
                <Button size="lg" className="w-full md:w-auto">
                  Start Application
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          </EtherealShadow>
        </div>
      </div>
    </section>
  );
};