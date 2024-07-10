'use client'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboards/modern/YearlyBreakup';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboards/modern/MonthlyEarnings';
import TopCards from '@/app/(DashboardLayout)/components/dashboards/modern/TopCards';
import RevenueUpdates from '@/app/(DashboardLayout)/components/dashboards/modern/RevenueUpdates';
import EmployeeSalary from '@/app/(DashboardLayout)/components/dashboards/modern/EmployeeSalary';
import Customers from '@/app/(DashboardLayout)/components/dashboards/modern/Customers';
import Projects from '@/app/(DashboardLayout)/components/dashboards/modern/Projects';
import Social from '@/app/(DashboardLayout)/components/dashboards/modern/Social';
import SellingProducts from '@/app/(DashboardLayout)/components/dashboards/modern/SellingProducts';
import WeeklyStats from '@/app/(DashboardLayout)/components/dashboards/modern/WeeklyStats';
import TopPerformers from '@/app/(DashboardLayout)/components/dashboards/modern/TopPerformers';


export default function Dashboard() {

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <TopCards />
          </Grid>
          <Grid item xs={12} lg={8}>
            <RevenueUpdates isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={12}>
                <YearlyBreakup isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <MonthlyEarnings isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <EmployeeSalary isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Customers isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Projects isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <WeeklyStats isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TopPerformers />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

